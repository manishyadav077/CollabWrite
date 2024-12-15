interface DocsIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocsIdPage = async ({ params }: DocsIdPageProps) => {
  const { documentId } = await params;
  return <div>Doc Id is: {documentId}</div>;
};

export default DocsIdPage;
