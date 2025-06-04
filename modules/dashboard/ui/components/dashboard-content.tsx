"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Video,
  Brain,
  Calendar,
  Play,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Mic,
  MicOff,
  VideoOff,
  Phone,
  PhoneOff,
  Settings,
  MoreHorizontal,
} from "lucide-react";

const recentMeetings = [
  {
    id: 1,
    title: "Product Strategy Review",
    participants: ["John Doe", "Sarah Wilson", "Mike Chen"],
    duration: "45 min",
    date: "2024-01-15",
    status: "completed",
    aiSummary: "Discussed Q1 roadmap priorities and resource allocation",
    transcript: true,
    recording: true,
  },
  {
    id: 2,
    title: "Customer Feedback Session",
    participants: ["Alice Johnson", "Bob Smith"],
    duration: "30 min",
    date: "2024-01-14",
    status: "completed",
    aiSummary: "Analyzed user feedback and identified key improvement areas",
    transcript: true,
    recording: true,
  },
  {
    id: 3,
    title: "Team Standup",
    participants: ["Team Alpha"],
    duration: "15 min",
    date: "2024-01-14",
    status: "in-progress",
    aiSummary: "",
    transcript: false,
    recording: false,
  },
];

const aiAgents = [
  {
    id: 1,
    name: "Meeting Assistant",
    description: "Takes notes and generates summaries",
    status: "active",
    usage: 85,
  },
  {
    id: 2,
    name: "Q&A Bot",
    description: "Answers questions about meeting content",
    status: "active",
    usage: 72,
  },
  {
    id: 3,
    name: "Action Item Tracker",
    description: "Identifies and tracks action items",
    status: "inactive",
    usage: 0,
  },
];

export function DashboardContent() {
  const [activeCall, setActiveCall] = useState(false);
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            AI Meeting Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your AI-powered video calls and meetings
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Video className="mr-2 h-4 w-4" />
            Start Meeting
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Meetings
            </CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Summaries</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">3 total configured</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Usage This Month
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4k</div>
            <p className="text-xs text-muted-foreground">minutes processed</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="meetings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="meetings">Recent Meetings</TabsTrigger>
          <TabsTrigger value="agents">AI Agents</TabsTrigger>
          <TabsTrigger value="live">Live Call</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="meetings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meeting History</CardTitle>
              <CardDescription>
                View and manage your recent AI-powered meetings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {meeting.participants
                          .slice(0, 3)
                          .map((participant, i) => (
                            <Avatar
                              key={i}
                              className="h-8 w-8 border-2 border-background"
                            >
                              <AvatarFallback className="text-xs">
                                {participant
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                      </div>
                      <div>
                        <h4 className="font-semibold">{meeting.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{meeting.duration}</span>
                          <span>•</span>
                          <span>{meeting.date}</span>
                        </div>
                        {meeting.aiSummary && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {meeting.aiSummary}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          meeting.status === "completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {meeting.status}
                      </Badge>
                      {meeting.transcript && (
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      )}
                      {meeting.recording && (
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Agents</CardTitle>
              <CardDescription>
                Configure and monitor your real-time AI agents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {aiAgents.map((agent) => (
                  <Card key={agent.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <Badge
                          variant={
                            agent.status === "active" ? "default" : "secondary"
                          }
                        >
                          {agent.status}
                        </Badge>
                      </div>
                      <CardDescription>{agent.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Usage</span>
                          <span>{agent.usage}%</span>
                        </div>
                        <Progress value={agent.usage} />
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-2" />
                          Configure
                        </Button>
                        <Button
                          variant={
                            agent.status === "active"
                              ? "destructive"
                              : "default"
                          }
                          size="sm"
                        >
                          {agent.status === "active"
                            ? "Deactivate"
                            : "Activate"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="live" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Live Video Call</CardTitle>
              <CardDescription>
                AI-powered video calling with real-time agents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Video Call Interface */}
                <div className="relative bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                  {activeCall ? (
                    <div className="text-white text-center">
                      <Video className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Call in progress...</p>
                      <p className="text-sm text-gray-300">
                        AI agents are active
                      </p>
                    </div>
                  ) : (
                    <div className="text-white text-center">
                      <VideoOff className="h-16 w-16 mx-auto mb-4 text-gray-500" />
                      <p className="text-lg">No active call</p>
                      <p className="text-sm text-gray-400">
                        Start a meeting to begin
                      </p>
                    </div>
                  )}

                  {/* Call Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <Button
                      variant={micEnabled ? "default" : "destructive"}
                      size="sm"
                      onClick={() => setMicEnabled(!micEnabled)}
                    >
                      {micEnabled ? (
                        <Mic className="h-4 w-4" />
                      ) : (
                        <MicOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant={videoEnabled ? "default" : "destructive"}
                      size="sm"
                      onClick={() => setVideoEnabled(!videoEnabled)}
                    >
                      {videoEnabled ? (
                        <Video className="h-4 w-4" />
                      ) : (
                        <VideoOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant={activeCall ? "destructive" : "default"}
                      size="sm"
                      onClick={() => setActiveCall(!activeCall)}
                    >
                      {activeCall ? (
                        <PhoneOff className="h-4 w-4" />
                      ) : (
                        <Phone className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* AI Agent Status */}
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">
                        Real-time Transcription
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span>Active</span>
                        </div>
                        <p className="text-muted-foreground">
                          {`Let's discuss the quarterly results and plan for next
                          quarter...`}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">
                        AI Meeting Notes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span>Generating</span>
                        </div>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Q4 revenue exceeded targets</li>
                          <li>• Need to hire 3 new developers</li>
                          <li>• Product launch scheduled for March</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Analytics</CardTitle>
                <CardDescription>
                  Insights from your AI-powered meetings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Meeting Duration</span>
                    <span className="font-semibold">32 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Summary Accuracy</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Action Items Identified</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Transcript Search Queries</span>
                    <span className="font-semibold">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Usage & Billing</CardTitle>
                <CardDescription>
                  Monitor your subscription and usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Usage</span>
                      <span>2,400 / 5,000 minutes</span>
                    </div>
                    <Progress value={48} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Current Plan</span>
                    <Badge>Pro Plan</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Next Billing</span>
                    <span className="font-semibold">Feb 15, 2024</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Manage Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
