import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { db } from "@/db"
import { users } from "@/db/schema"


export default async function Home() {
    const getUsers = await db.select().from(users)

    return (
    <div>
      <h1>IT Support System</h1>
      <span>this is for putting problems on the db</span>
        {
            getUsers.map(user => (
                <Card key={user.id} className="w-80 flex flex-column m-2 items-center">
                    <div>User: {user.name}</div>
                    <div>Email: {user.email}</div>
                </Card>
            ))
        }
    </div>
  );
}
