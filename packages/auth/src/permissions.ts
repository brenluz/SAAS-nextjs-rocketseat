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
  member(user, { can }) {
    // can('invite', 'User')
    can(['create', 'get'], 'Project')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  billing() {},
}
