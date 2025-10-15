import Timeline from '../Timeline';

export default function TimelineExample() {
  const events = [
    {
      year: "1995",
      title: "Foundation",
      description: "Macro Vision Academy was established with a vision to provide holistic education"
    },
    {
      year: "2000",
      title: "First Major Achievement",
      description: "Students secured top ranks in national level examinations"
    },
    {
      year: "2010",
      title: "Infrastructure Expansion",
      description: "State-of-the-art facilities including Vision Udaan and Vision Paradise were built"
    },
    {
      year: "2020",
      title: "100% Success Rate",
      description: "Achieved remarkable 100% results in board examinations"
    },
    {
      year: "2025",
      title: "Continuing Excellence",
      description: "Leading institution with outstanding academic and sports achievements"
    }
  ];

  return <Timeline events={events} />;
}
