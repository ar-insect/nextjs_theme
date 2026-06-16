import { ProfileCard } from "./components/ProfileCard";

export default function ProfilePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-8 py-10">
      <ProfileCard name="Demo User" email="demo@example.com" />
    </main>
  );
}
