import { useRouter } from "next/router";

export default function PageId() {
  const { pageId, domain } = useRouter().query;

  return (
    <div className="h-screen w-screen items-center justify-center flex">
      <span>
        [domain]/[pageId] - {domain}/{pageId}
      </span>
    </div>
  );
}
