import { Rule } from 'eslint'
import { Node, BinaryExpression } from 'estree'

/**
 * Determines whether the given node is a `null` literal.
 */
function isNullLiteral(node: Node): boolean {
  /*
   * Checking `node.value === null` does not guarantee that a literal is a null literal.
   * When parsing values that cannot be represented in the current environment (e.g. unicode
   * regexes in Node 4), `node.value` is set to `null` because it wouldn't be possible to
   * set `node.value` to a unicode regex. To make sure a literal is actually `null`, check
   * `node.regex` instead. Also see: https://github.com/eslint/eslint/issues/8020
   */
  return (
    node.type === 'Literal' &&
    node.value === null &&
    // @ts-ignore
    !node.regex &&
    // @ts-ignore
    !node.bigint
  )
}

function isNullOrUndefinedExpression(node: Node) {
  return (
    isNullLiteral(node) ||
    (node.type === 'Identifier' && node.name === 'undefined') ||
    (node.type === 'UnaryExpression' && node.operator === 'void')
  )
}

function isNullorUndefinedCheck(node: BinaryExpression) {
  return (
    isNullOrUndefinedExpression(node.right) ||
    isNullOrUndefinedExpression(node.left)
  )
}

const rule: Rule.RuleModule = {
  meta: {
    messages: {
      unexpected:
        "Expected '{{expectedOperator}}' and instead saw '{{actualOperator}}'.",
    },
    // TODO: Temporarily stop providing fixable
    // fixable: 'code',
  },
  create: (context) => {
    const sourceCode = context.getSourceCode()

    return {
      BinaryExpression: (node: Node) => {
        if (node.type !== 'BinaryExpression') {
          return
        }
        const existNullOrUndefined = isNullorUndefinedCheck(node)

        if (
          existNullOrUndefined &&
          (node.operator === '===' || node.operator === '!==')
        ) {
          const expectedOperator = node.operator.slice(0, -1)
          const operatorToken = sourceCode.getFirstTokenBetween(
            node.left,
            node.right,
            (token) => token.value === node.operator,
          )
          context.report({
            node,
            messageId: 'unexpected',
            data: { expectedOperator, actualOperator: node.operator },
            // TODO: Temporarily stop providing fixable
            // fix: (fixer) => {
            //   if (operatorToken) {
            //     return fixer.replaceText(operatorToken, expectedOperator)
            //   }
            //   return null
            // },
          })
        }
      },
    }
  },
}

export { rule as noEqeqeqNullUndefined }
