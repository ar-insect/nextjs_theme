import React from "react";
import { Card } from "@/components/ui/Card";

type ProfileCardProps = {
  name: string;
  email: string;
};

export function ProfileCard({ name, email }: ProfileCardProps) {
  return (
    <Card>
      <h1 className="text-xl font-semibold text-slate-900">{name}</h1>
      <p className="mt-1 text-sm text-slate-600">{email}</p>
    </Card>
  );
}
