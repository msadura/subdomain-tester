import { useRouter } from "next/router";
import useSWR from "swr";

export default function DomainIndex() {
  const { domain } = useRouter().query;
  const { data, error, isLoading } = useSWR<{
    name: string;
    spaceFromSubdomain: string;
  }>(`test`, () => fetch("/api/hello").then((res) => res.json()));

  console.log("🔥 req:", data, error, isLoading);

  const renderResponse = () => {
    if (data?.name) {
      return data.name;
    }

    if (error) {
      return `Fetch error :(`;
    }

    if (isLoading) {
      return "Loading...";
    }

    return "";
  };

  return (
    <div className="h-screen w-screen items-center justify-center flex flex-col">
      <span>[domain] index - {domain}</span>
      <span>Api response: {renderResponse()}</span>
      {!!data?.spaceFromSubdomain && (
        <span>Api space from subdomain: {data.spaceFromSubdomain}</span>
      )}
    </div>
  );
}
