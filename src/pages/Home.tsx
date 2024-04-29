import Blogs from "@/components/blogs";
import RecentBlog from "@/components/recentBlog";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <RecentBlog />
      <Blogs />
    </div>
  );
}
