import * as React from 'react'
import { cn } from '../../utils/cn'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>

export const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => {
  return (
    <span className={cn('inline-flex items-center px-2 py-1 rounded-full text-xs bg-soft-amber text-deep-green', className)} {...props}>
      {children}
    </span>
  )
}

export default Badge
