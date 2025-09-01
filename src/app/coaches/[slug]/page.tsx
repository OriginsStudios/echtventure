// Dynamic page for each coach
export default function CoachPage({ params }: { params: { slug: string } }) {
  return <div>Coach: {params.slug}</div>;
}
