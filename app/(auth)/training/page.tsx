import { verifyAuth } from "@/lib/auth";
import { getTrainings } from "@/lib/training";
import { TrainingSessions } from "@/lib/types";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function TrainingPage() {
  const session = await verifyAuth();
  if (!session.user) {
    return redirect("/");
  }

  const trainingSessions = getTrainings() as TrainingSessions[];

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id="training-sessions">
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <Image
              src={`/trainings/${training.image}`}
              alt={training.title}
              width={200}
              height={200}
              unoptimized
            />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
