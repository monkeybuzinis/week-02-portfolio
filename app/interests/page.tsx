import InterestsTabs from "./InterestsTabs";

type Props = {
  searchParams: Promise<{ tab?: string }>;
};

export default async function InterestsPage({ searchParams }: Props) {
  const { tab } = await searchParams;
  return <InterestsTabs initialTab={tab ?? "painting"} />;
}
