type SuperUser = {
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
  roles: ("Write" | "Read" | "Update" | "Delete")[];
};

const superUser: SuperUser = {
  password: "11",
  firstName: "Gal",
  lastName: "Amouyal",
  userName: "g@gmail.com",
  roles: ["Update"],
};

type Subscriber = Omit<SuperUser, "roles" | "firstName" | "lastName">;

const subscriber: Subscriber = {
  password: "11",
  //   firstName: "Gal",
  userName: "g@gmail.com",
};

type SubscriberPick = Pick<SuperUser, "userName">;

const subscriber2: SubscriberPick = {
  userName: "g@gmail.com",
};

console.log(subscriber2, subscriber);
