import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'WordPress Blog | sumit.ml',
    description: 'My latest thoughts and updates from my WordPress blog.',
    openGraph: {
        title: 'WordPress Blog | sumit.ml',
        description: 'My latest thoughts and updates from my WordPress blog.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'WordPress Blog | sumit.ml',
        description: 'My latest thoughts and updates from my WordPress blog.',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 