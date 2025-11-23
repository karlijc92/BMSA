import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function PressKit() {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const pressAssets = [
    {
      category: 'Logos',
      items: [
        { name: 'ProofMode Logo (PNG)', size: '2MB', format: 'PNG', description: 'High-resolution logo with transparent background' },
        { name: 'ProofMode Logo (SVG)', size: '45KB', format: 'SVG', description: 'Vector logo for print and web' },
        { name: 'ProofMode Icon', size: '1MB', format: 'PNG', description: 'App icon and favicon versions' },
        { name: 'Logo Variations', size: '5MB', format: 'ZIP', description: 'Light, dark, and monochrome versions' }
      ]
    },
    {
      category: 'Screenshots',
      items: [
        { name: 'Assessment Flow', size: '3MB', format: 'PNG', description: 'Complete skill assessment process' },
        { name: 'Dashboard Interface', size: '2MB', format: 'PNG', description: 'User dashboard and ProofTag management' },
        { name: 'Certificate Verification', size: '2MB', format: 'PNG', description: 'ProofTag verification system' },
        { name: 'Mobile Screenshots', size: '4MB', format: 'ZIP', description: 'Mobile app interface screenshots' }
      ]
    },
    {
      category: 'Brand Guidelines',
      items: [
        { name: 'Brand Style Guide', size: '8MB', format: 'PDF', description: 'Complete brand guidelines and usage rules' },
        { name: 'Color Palette', size: '1MB', format: 'PDF', description: 'Official colors and hex codes' },
        { name: 'Typography Guide', size: '2MB', format: 'PDF', description: 'Font specifications and usage' }
      ]
    }
  ];

  const companyInfo = {
    founded: '2024',
    headquarters: 'Global (Remote-First)',
    mission: 'To create the first global system for verifying undocumented skills, work experience, and identity',
    vision: 'A world where talent is recognized regardless of formal credentials',
    targetMarket: '1.5+ billion people worldwide without formal credentials',
    keyStats: [
      { label: 'Target Population', value: '1.5B+ people' },
      { label: 'Skills Categories', value: '100+' },
      { label: 'Countries Served', value: '180+' },
      { label: 'Verification Accuracy', value: '95%+' }
    ]
  };

  const keyMessages = [
    'ProofMode is the first global system for verifying undocumented skills and work experience',
    'We serve 1.5+ billion people worldwide who lack formal credentials but possess valuable skills',
    'Our AI-powered assessment system provides blockchain-verified skill certificates called ProofTags',
    'ProofMode bridges the gap between talent and opportunity in the global economy',
    'We partner with NGOs, training programs, and employers to create inclusive hiring practices'
  ];

  const executiveInfo = [
    {
      name: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and social impact',
      expertise: 'Global talent systems, AI verification, social entrepreneurship'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ProofMode Press Kit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resources for journalists, bloggers, and media professionals covering ProofMode and the future of skill verification
          </p>
        </div>

        {/* Quick Facts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Company Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Company Information</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Founded:</strong> {companyInfo.founded}</div>
                  <div><strong>Headquarters:</strong> {companyInfo.headquarters}</div>
                  <div><strong>Industry:</strong> EdTech, HR Technology, Social Impact</div>
                  <div><strong>Stage:</strong> Early Stage Startup</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Statistics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {companyInfo.keyStats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Mission Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{companyInfo.mission}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(companyInfo.mission, 'mission')}
              >
                {copiedText === 'mission' ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                Copy Mission
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vision Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{companyInfo.vision}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(companyInfo.vision, 'vision')}
              >
                {copiedText === 'vision' ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                Copy Vision
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Key Messages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Messages</CardTitle>
            <CardDescription>Ready-to-use talking points for media coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {keyMessages.map((message, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Badge variant="secondary" className="mt-1">{index + 1}</Badge>
                  <p className="text-gray-700 flex-1">{message}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(message, `message-${index}`)}
                  >
                    {copiedText === `message-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Press Assets */}
        <div className="space-y-6 mb-8">
          {pressAssets.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((asset, assetIndex) => (
                    <div key={assetIndex} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{asset.name}</h4>
                        <p className="text-sm text-gray-600">{asset.description}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">{asset.format}</Badge>
                          <Badge variant="outline">{asset.size}</Badge>
                        </div>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Executive Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Team</CardTitle>
            <CardDescription>Leadership available for interviews and quotes</CardDescription>
          </CardHeader>
          <CardContent>
            {executiveInfo.map((exec, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold text-lg">{exec.name}</h4>
                <p className="text-gray-600 mb-2">{exec.bio}</p>
                <p className="text-sm text-gray-500"><strong>Expertise:</strong> {exec.expertise}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Media Contact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Media Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Press Inquiries</h4>
                <div className="space-y-2">
                  <div><strong>Email:</strong> press@proofmode.com</div>
                  <div><strong>Phone:</strong> +1 (555) 123-4567</div>
                  <div><strong>Response Time:</strong> Within 24 hours</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Partnership Inquiries</h4>
                <div className="space-y-2">
                  <div><strong>Email:</strong> partnerships@proofmode.com</div>
                  <div><strong>Phone:</strong> +1 (555) 123-4568</div>
                  <div><strong>Response Time:</strong> Within 48 hours</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Logo Usage</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Always use official logos provided in this press kit</li>
                  <li>Maintain minimum clear space around the logo</li>
                  <li>Do not modify, stretch, or alter the logo in any way</li>
                  <li>Use appropriate logo version for your background (light/dark)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Content Attribution</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Please attribute quotes and information to ProofMode</li>
                  <li>Link back to proofmode.com when possible</li>
                  <li>Contact us for fact-checking before publication</li>
                  <li>We appreciate receiving copies of published coverage</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}