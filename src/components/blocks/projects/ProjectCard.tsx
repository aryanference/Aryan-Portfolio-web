import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Props {
    project: {
        id: number
        title: string
        description: string
        tags: string[]
        repo?: string
        link?: string
    }
}

export default function ProjectCard({ project }: Props) {
    const targetUrl = project.repo || project.link

    return (
        <div className="card-framer flex flex-col h-full group p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-[20px] md:text-[22px] font-medium text-white group-hover:text-framer-blue transition-colors duration-300" style={{ letterSpacing: '-0.8px' }}>
                    {project.title}
                </h3>

                {targetUrl && (
                    <div className="p-2 rounded-lg transition-colors duration-200" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <Link href={targetUrl} target="_blank" className="text-white/40 group-hover:text-framer-blue transition-colors">
                            {project.repo ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                        </Link>
                    </div>
                )}
            </div>

            <p className="font-body text-[14px] leading-[1.6] text-white/50 flex-grow mb-8" style={{ fontFeatureSettings: "'cv11'" }}>
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                    <span 
                        key={idx} 
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full"
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.45)',
                            border: '1px solid rgba(255,255,255,0.06)'
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
