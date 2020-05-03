import { Rule } from 'eslint'
import { Node } from 'estree'

const rule: Rule.RuleModule = {
  meta: {
    messages: {
      banLet: '`let` is not allowed. Use `const` instead.',
    },
  },
  create: (context) => {
    return {
      VariableDeclaration: (node: Node) => {
        if (node.type !== 'VariableDeclaration') {
          return
        }

        if (node.kind === 'let') {
          context.report({
            node,
            messageId: 'banLet',
          })
        }
      },
    }
  },
}

export { rule as noLet }
