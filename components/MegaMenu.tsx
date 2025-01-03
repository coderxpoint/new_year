import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface MegaMenuItem {
  title: string
  href: string
  badge?: string
}

interface MegaMenuSection {
  title: string
  items: MegaMenuItem[]
}

interface QuickLink {
  title: string
  href: string
}

interface PromoContent {
  title: string
  description: string
  cta: string
  image: string
}

interface MegaMenuProps {
  content: MegaMenuSection[]
  quickLinks: QuickLink[]
  promo: PromoContent
}

export function MegaMenu({ content, quickLinks, promo }: MegaMenuProps) {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-4 gap-8">
        {content.map((section, index) => (
          <div key={index} className="space-y-6">
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-500">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="group flex items-center">
                      <span className="text-sm">{item.title}</span>
                      {item.badge && (
                        <span className="ml-2 rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="relative overflow-hidden rounded-lg bg-red-800">
          <div className="relative z-10 p-6 text-white">
            <h3 className="mb-4 text-2xl font-bold">
              {promo.title}
            </h3>
            <p className="mb-6">{promo.description}</p>
            <Link 
              href="#" 
              className="inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-red-800 hover:bg-gray-100"
            >
              {promo.cta}
            </Link>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2">
            <Image
              src={promo.image}
              alt="Promotional image"
              width={300}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-4">
        <h3 className="mb-4 text-sm font-medium text-gray-500">Quick Links</h3>
        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link, index) => (
            <Button key={index} variant="outline" size="sm" asChild>
              <a href={link.href}>{link.title}</a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

