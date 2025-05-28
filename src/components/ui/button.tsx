import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'luminous' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-silver focus:ring-opacity-50 disabled:opacity-50 disabled:pointer-events-none",
          {
            'minimal-button text-text-body hover:text-accent-silver px-6 py-3': variant === 'default',
            'minimal-button text-accent-silver border border-accent-silver/30 rounded-sm px-6 py-3 hover:border-accent-silver hover:bg-accent-silver/5': variant === 'luminous',
            'minimal-button text-text-secondary hover:text-accent-silver px-6 py-3': variant === 'ghost',
          },
          {
            'text-sm px-4 py-2': size === 'sm',
            'text-lg px-8 py-4': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
