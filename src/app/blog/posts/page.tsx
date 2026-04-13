'use client'

import BaseContainer from '@/components/layout/container/base-container'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import { DynamicBreadcrumb } from '@/components/ui/primitives/breadcrumb'
import { ThemeToggle } from '@/components/ui/theme/theme-toggle'
import { IndividualPageFooter } from '@/components/layout/footer/IndividualPageFooter'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'

export default function WordPressBlogPost() {
  return (
    <>
      <BaseContainer size="md" paddingX="md" paddingY="lg">
        <StackVertical gap="md">
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb 
              items={[
                { href: '/', label: 'Home', emoji: '👾' },
                { href: '/blog', label: 'Blog' },
                { label: 'WordPress Blog' }
              ]}
            />
            <ThemeToggle />
          </div>

          <article>
            <TextHeading as="h1">WordPress Blog</TextHeading>
            <Text variant="muted" size="xs" className="mb-8">March 19, 2024 | 5 min read</Text>

            <div className="prose dark:prose-invert max-w-none">
              <iframe 
                src="https://infomatrixme.wordpress.com/?_gl=1*129tfu9*_gcl_au*MTc4NTk2MjA1NC4xNzQ4ODYyMzcw"
                className="w-full min-h-screen border-none"
                title="WordPress Blog"
              />
            </div>
          </article>
        </StackVertical>
      </BaseContainer>

      <IndividualPageFooter parentPageName='Blog' />
    </>
  )
} 