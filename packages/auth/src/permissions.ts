import { AbilityBuilder } from '@casl/ability'

import type { AppAbility } from './index'
import type { User } from './models/user'
import type { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  admin(_, { can }) {
    can('manage', 'all')
  },
  member(_, { can }) {
    // can('invite', 'User')
    can('create', 'project')
    can('transfer_ownership', 'billing')
  },
  billing() {},
}
