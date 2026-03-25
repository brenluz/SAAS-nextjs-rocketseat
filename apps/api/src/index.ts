import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'member' })

const userCanInvite = ability.can('invite', 'User')
const userCanDelete = ability.can('delete', 'User')

console.log(userCanInvite)
console.log(userCanDelete)
