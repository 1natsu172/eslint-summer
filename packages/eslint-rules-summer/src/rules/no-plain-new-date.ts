import { Rule } from 'eslint'
import { Node } from 'estree'

const rule: Rule.RuleModule = {
  meta: {
    messages: {
      noPlainNewDate: "Don't use '{{actualOperator}}'.",
    },
  },
  create: (context) => {
    return {
      NewExpression: (node: Node) => {
        if (node.type !== 'NewExpression') {
          return
        }
        if (node.callee.type !== 'Identifier' || node.callee.name !== 'Date') {
          return
        }
        if (!node.arguments.length) {
          context.report({
            node,
            messageId: 'noPlainNewDate',
            data: { actualOperator: 'new Date()' },
          })
        }
      },
      'CallExpression > MemberExpression': (node: Node) => {
        if (node.type !== 'MemberExpression') {
          return
        }
        const { object, property } = node
        if (
          object.type === 'Identifier' &&
          object.name === 'Date' &&
          property.type === 'Identifier' &&
          property.name === 'now'
        ) {
          context.report({
            node,
            messageId: 'noPlainNewDate',
            data: { actualOperator: 'Date.now()' },
          })
        }
      },
    }
  },
}

export { rule as noPlainNewDate }
