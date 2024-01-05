import { Pinecone } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: "gcp-starter",
  });
  const index = pinecone.Index("quilluminate");
  return pinecone;
};
