import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockData = [
  { platform: "Twitter", posts: 120, likes: 340 },
  { platform: "Instagram", posts: 95, likes: 450 },
  { platform: "Facebook", posts: 75, likes: 280 },
  { platform: "LinkedIn", posts: 60, likes: 220 },
];

function App() {
  const [data, setData] = useState(mockData);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filtered = mockData.filter(item =>
      item.platform.toLowerCase().includes(search.toLowerCase())
    );
    setData(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Social Media Analytics</h1>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Search platform..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.platform}</h2>
              <p>Posts: {item.posts}</p>
              <p>Likes: {item.likes}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Engagement Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="platform" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="likes" fill="#8884d8" name="Likes" />
            <Bar dataKey="posts" fill="#82ca9d" name="Posts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
