import { Editor } from "./editor";
import Toolbar from "./toolbar";


interface DocsIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocsIdPage = async ({ params }: DocsIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar/>
      <Editor />
    </div>
  );
};

export default DocsIdPage;
