import { Editor } from "./editor";

interface DocsIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocsIdPage = async ({ params }: DocsIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocsIdPage;
