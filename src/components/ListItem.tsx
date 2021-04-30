import React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data._id}`}>
    <a>
      {data._id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
