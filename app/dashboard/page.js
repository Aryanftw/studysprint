'use client'
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar, Trophy, Award, Flame } from "lucide-react";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Dashboard() {
  // Mock data for study hours
  const [studyData, setStudyData] = useState([
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 4 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 5 },
    { day: 'Fri', hours: 2 },
    { day: 'Sat', hours: 1.5 },
    { day: 'Sun', hours: 3.5 }
  ]);

  // Most productive day data
  const [productiveDay, setProductiveDay] = useState({
    day: 'Thursday',
    date: 'April 17',
    hours: 5
  });

  // Generate calendar data for the month (LeetCode style)
  const generateMonthData = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() - (29 - i));
      
      // LeetCode-style binary activity (0 or 1)
      let activityLevel = 0;
      const recencyBoost = Math.min(1, i / 20);
      const rand = Math.random();
      
      activityLevel = rand < 0.5 + recencyBoost * 0.2 ? 1 : 0;
      
      days.push({
        date: date,
        level: activityLevel,
        hours: activityLevel > 0 ? 1 : 0
      });
    }
    
    return days;
  };

  const [monthData, setMonthData] = useState(generateMonthData);
  const [totalBadges, setTotalBadges] = useState(17);

  const getDayLabels = () => ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const getWeeksData = () => {
    const weeks = [];
    let weekData = [];
    
    monthData.forEach((day, index) => {
      weekData.push(day);
      if ((index + 1) % 7 === 0 || index === monthData.length - 1) {
        weeks.push([...weekData]);
        weekData = [];
      }
    });
    
    return weeks;
  };

  return (
    <div className={`bg-black min-h-screen w-full text-white pt-20 ${inter.variable} font-sans`}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 h-auto" style={{ gridTemplateRows: 'repeat(4, minmax(180px, 1fr))' }}>
        {/* Box 1: Study Hours Graph (Reduced size) */}
        <div className="md:col-span-2 md:row-span-2 bg-gray-900 border border-gray-700 rounded-xl p-5 transition-all duration-300 hover:border-blue-500 overflow-hidden shadow-lg">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Calendar className="mr-2 text-blue-400" size={20} />
            Weekly Study Progress
          </h3>
          <div className="h-96 pt-28">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={studyData} margin={{ top: 5, right: 5, bottom: 20, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="day" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                  labelStyle={{ color: '#ddd' }}
                  itemStyle={{ color: '#4da6ff' }}
                />
                <Bar 
                  dataKey="hours" 
                  fill="#4da6ff" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Box 2: Most Productive Day (Aligned layout) */}
        <div className="md:col-span-3 md:col-start-3 bg-gray-900 border border-gray-700 rounded-xl p-5 transition-all duration-300 hover:border-orange-500 shadow-lg h-48">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Trophy className="mr-2 text-orange-400" size={20} />
            Most Productive Day
          </h3>
          <div className="flex items-center gap-6 pl-4">
            <div className="bg-orange-900 bg-opacity-40 rounded-full p-4 flex items-center justify-center">
              <div className="text-4xl font-bold text-orange-400">{productiveDay.hours}h</div>
            </div>
            <div>
              <div className="text-2xl text-gray-300 mb-2">{productiveDay.day}</div>
              <div className="text-gray-400 text-lg">{productiveDay.date}</div>
              <div className="text-gray-400 text-sm">You crushed your goals!</div>
            </div>
          </div>
        </div>

        {/* Box 3: LeetCode Style Streak Calendar (Reduced size) */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-3 md:row-start-2 bg-gray-900 border border-gray-700 rounded-xl p-5 transition-all duration-300 hover:border-green-500 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Flame className="mr-2 text-green-400" size={20} />
            Study Streak
          </h3>
          
          <div className="flex flex-col h-full">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="text-5xl font-bold text-center text-green-400">12</div>
                <div className="text-gray-400 text-center mt-1">Day Streak</div>
              </div>
            </div>
            
            <div className="mt-2 flex flex-col items-center">
              <div className="flex mb-1 w-full max-w-md">
                {getDayLabels().map((day, index) => (
                  <div key={index} className="w-8 flex-1 text-xs text-gray-500 text-center">{day}</div>
                ))}
              </div>
              
              <div className="w-full max-w-md">
                {getWeeksData().map((week, weekIndex) => (
                  <div key={weekIndex} className="flex mb-1">
                    {week.map((day, dayIndex) => (
                      <div 
                        key={dayIndex}
                        className={`w-8 h-8 flex-1 ${day.level ? 'bg-green-500' : 'bg-gray-800'} rounded-sm mx-0.5 transition-colors cursor-pointer`}
                        title={`${day.date.toLocaleDateString()}: ${day.hours} hours`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center mt-4 text-xs text-gray-400 gap-2">
                <span>Skipped</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-gray-800"></div>
                  <div className="w-4 h-4 bg-green-500"></div>
                </div>
                <span>Focused</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 4: Total Badges */}
        <div className="md:col-span-2 md:row-start-3 bg-gray-900 border border-gray-700 rounded-xl p-5 transition-all duration-300 hover:border-purple-500 shadow-lg">
          <h3 className="text-xl font-semibold flex items-center mb-4">
            <Award className="mr-2 text-purple-400" size={20} />
            Total Badges
          </h3>
          <div className="flex justify-center items-center h-full pb-12">
            <div className="bg-purple-900 bg-opacity-50 rounded-full p-6">
              <div className="text-5xl font-bold text-purple-300">{totalBadges}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}