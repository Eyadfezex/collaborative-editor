"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblocks";

/**
 * Fetches user details from Clerk for a list of user IDs and returns the users sorted by the provided IDs.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string[]} params.userIds - An array of user IDs to fetch details for.
 * @returns {Promise<string>} - A JSON-stringified array of user objects, sorted by the input user IDs.
 *                              Each user object contains `id`, `name`, `email`, and `avatar`.
 *                              If a user is not found, the corresponding entry will be `undefined`.
 *
 * @throws {Error} - If there is an error fetching user data from Clerk, it will be logged and re-thrown.
 *
 * @example
 * const userIds = ["user_123", "user_456"];
 * const users = await getClerkUsers({ userIds });
 * console.log(users); // JSON-stringified array of user objects
 */
export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    // Fetch user data from Clerk using the provided user IDs
    const { data } = await (
      await clerkClient()
    ).users.getUserList({
      emailAddress: userIds, // Fetch users by their IDs
    });

    // Map the fetched user data to a simplified format
    const users = data.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress, // Use the first email address
      avatar: user.imageUrl,
    }));

    // Return the sorted users as a JSON-stringified array
    return parseStringify(users);
  } catch (err) {
    // Log and re-throw any errors that occur during the process
    console.log(`Error fetching users: ${err}`);
    throw err;
  }
};

export const getDocumentUsers = async ({
  roomId,
  currentUser,
  text,
}: {
  roomId: string;
  currentUser: string;
  text: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    const users = Object.keys(room.usersAccesses).filter(
      (email) => email !== currentUser
    );

    if (text.length) {
      const lowerCaseText = text.toLowerCase();

      const filteredUsers = users.filter((email: string) =>
        email.toLowerCase().includes(lowerCaseText)
      );

      return parseStringify(filteredUsers);
    }

    return parseStringify(users);
  } catch (error) {
    console.log(`Error fetching document users: ${error}`);
  }
};
