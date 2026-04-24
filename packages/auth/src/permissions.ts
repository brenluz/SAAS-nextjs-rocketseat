import { AbilityBuilder } from '@casl/ability'

import type { AppAbility } from './index'
import type { User } from './models/user'
import type { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  admin(user, { can, cannot }) {
    can('manage', 'all')
    can(['transfer_ownership', 'update'], 'Organization', { ownerId: { $eq: user.id } })

    cannot(['transfer_ownership', 'update'],'Organization')

  },
  member(user, { can }) {
    can('get', 'User')
    can(['create', 'get'], 'Project')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  billing(user, { can }) {
    can('manage', 'Billing')
  },
}
