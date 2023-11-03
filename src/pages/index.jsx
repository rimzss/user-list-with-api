import SearchBar from "@/components/searchbar";
import Table from "@/components/table";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] p-10 w-screen h-screen">
      <SearchBar />
      <Table />
    </main>
  );
}
