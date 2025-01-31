import { liveblocks } from "@/lib/liveblocks";
import { getRandomColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Handles a POST request to identify a user in Liveblocks.
 * - Fetches the current authenticated user from Clerk.
 * - If no user is authenticated, redirects to the sign-in page.
 * - Constructs a user object with details like name, email, avatar, and a random color.
 * - Identifies the user in Liveblocks using their email as the `userId`.
 * - Returns the response from Liveblocks.
 *
 * @param {Request} request - The incoming POST request.
 * @returns {Promise<Response>} - A response object with the status and body from Liveblocks.
 *
 * @example
 * // Example POST request to this endpoint
 * fetch("/api/identify-user", { method: "POST" });
 */
export async function POST(request: Request) {
  // Fetch the current authenticated user from Clerk
  const clerkUser = await currentUser();

  // If no user is authenticated, redirect to the sign-in page
  if (!clerkUser) {
    redirect("/sign-in");
    return;
  }

  // Destructure the necessary fields from the Clerk user object
  const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;

  // Construct a user object with additional details
  const user = {
    id,
    info: {
      id,
      name: `${firstName} ${lastName}`,
      email: emailAddresses[0].emailAddress, // Use the first email address
      avatar: imageUrl,
      color: getRandomColor(), // Assign a random color for the user
    },
  };

  // Identify the user in Liveblocks
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email, // Use the user's email as the Liveblocks userId
      groupIds: [], // Optional: Add group IDs if the user belongs to any groups
    },
    { userInfo: user.info } // Pass user info to Liveblocks
  );

  // Return the response from Liveblocks
  return new Response(body, { status });
}
