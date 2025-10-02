import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  Share2, 
  Plus, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Trophy,
  Star,
  Calendar,
  ExternalLink
} from 'lucide-react';

export default function Dashboard() {
  const [proofTags] = useState([
    {
      id: 1,
      skill: 'Web Development',
      status: 'verified',
      score: 92,
      issueDate: '2024-01-15',
      verificationId: 'PT-WD-2024-001',
      downloads: 12,
      shares: 5
    },
    {
      id: 2,
      skill: 'Graphic Design',
      status: 'pending',
      score: null,
      issueDate: null,
      verificationId: 'PT-GD-2024-002',
      downloads: 0,
      shares: 0
    },
    {
      id: 3,
      skill: 'Digital Marketing',
      status: 'reviewing',
      score: null,
      issueDate: null,
      verificationId: 'PT-DM-2024-003',
      downloads: 0,
      shares: 0
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'reviewing': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const handleDownload = (proofTag) => {
    // Simulate download
    const element = document.createElement('a');
    const file = new Blob([`ProofTag Certificate
    
Skill: ${proofTag.skill}
Verification ID: ${proofTag.verificationId}
Score: ${proofTag.score}/100
Issue Date: ${proofTag.issueDate}
Blockchain Hash: 0x${Math.random().toString(16).substr(2, 40)}

This certificate verifies that the holder has demonstrated competency in ${proofTag.skill} through ProofMode's AI-verified assessment system.

Verify authenticity at: https://proofmode.com/verify/${proofTag.verificationId}
`], { type: 'text/plain' });
    
    element.href = URL.createObjectURL(file);
    element.download = `ProofTag_${proofTag.skill.replace(' ', '_')}_${proofTag.verificationId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
              <p className="text-gray-600">Manage your ProofTags and skill verifications</p>
            </div>
            <Button onClick={() => window.location.href = '/assessment'}>
              <Plus className="w-4 h-4 mr-2" />
              New Assessment
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total ProofTags</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Verified Skills</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold">92</p>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Downloads</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Download className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="prooftags" className="space-y-6">
          <TabsList>
            <TabsTrigger value="prooftags">My ProofTags</TabsTrigger>
            <TabsTrigger value="profile">Public Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="prooftags" className="space-y-6">
            <div className="grid gap-6">
              {proofTags.map((tag) => (
                <Card key={tag.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          {tag.skill}
                          <Badge className={getStatusColor(tag.status)}>
                            {getStatusIcon(tag.status)}
                            <span className="ml-1 capitalize">{tag.status}</span>
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          Verification ID: {tag.verificationId}
                        </CardDescription>
                      </div>
                      {tag.score && (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{tag.score}</div>
                          <div className="text-sm text-gray-500">Score</div>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {tag.status === 'verified' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Issued: {new Date(tag.issueDate).toLocaleDateString()}</span>
                          <span>Downloads: {tag.downloads} | Shares: {tag.shares}</span>
                        </div>

                        <div className="flex gap-3">
                          <Button onClick={() => handleDownload(tag)}>
                            <Download className="w-4 h-4 mr-2" />
                            Download Certificate
                          </Button>
                          <Button variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          <Button variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Verify Online
                          </Button>
                        </div>
                      </div>
                    )}

                    {tag.status === 'pending' && (
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <p className="text-sm text-yellow-800">
                          Your assessment is in the queue for review. Expected completion: 24-48 hours.
                        </p>
                      </div>
                    )}

                    {tag.status === 'reviewing' && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm text-blue-800 mb-2">
                          AI analysis complete. Expert review in progress.
                        </p>
                        <Progress value={75} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Public Profile</CardTitle>
                <CardDescription>
                  Your public profile showcases your verified skills to potential employers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">JD</span>
                    </div>
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-gray-600">Verified Web Developer</p>
                    <div className="flex justify-center gap-2 mt-4">
                      <Badge className="bg-green-100 text-green-800">Web Development</Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Public Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">Settings panel coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}