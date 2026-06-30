import Repository from "../models/repository.model";
import Event from "../models/event.model";
import Action from "../models/action.model";

export const getDashboardStats = async (
  userId: string
) => {
  // Connected repositories count
  const repositories =
    await Repository.countDocuments({
      user: userId,
    });

  // Get repository full names
  const connectedRepositories =
    await Repository.find({
      user: userId,
    }).select("fullName");

  const repoNames =
    connectedRepositories.map(
      (repo) => repo.fullName
    );

  // Count events
  const events =
    await Event.countDocuments({
      repository: {
        $in: repoNames,
      },
    });

  // Get all event ids
  const eventIds = (
    await Event.find({
      repository: {
        $in: repoNames,
      },
    }).distinct("_id")
  ).map((id) => id.toString());

  // Count actions
  const actions =
    await Action.countDocuments({
      eventId: {
        $in: eventIds,
      },
    });

  // Count successful actions
  const successActions =
    await Action.countDocuments({
      status: "SUCCESS",
      eventId: {
        $in: eventIds,
      },
    });

  // Count failed actions
  const failedActions =
    await Action.countDocuments({
      status: "FAILED",
      eventId: {
        $in: eventIds,
      },
    });

  return {
    repositories,
    events,
    actions,
    successActions,
    failedActions,
  };
};

export const getRecentEvents = async (
  userId: string
) => {
  const repositories =
    await Repository.find({
      user: userId,
    }).select("fullName");

  const repoNames =
    repositories.map(
      (repo) => repo.fullName
    );

  return Event.find({
    repository: {
      $in: repoNames,
    },
  })
    .sort({
      createdAt: -1,
    })
    .limit(10)
    .select(
      "githubEvent action repository processed createdAt"
    );
};

export const getRecentActions = async (
  userId: string
) => {
  const repositories =
    await Repository.find({
      user: userId,
    }).select("fullName");

  const repoNames =
    repositories.map(
      (repo) => repo.fullName
    );

  const events =
    await Event.find({
      repository: {
        $in: repoNames,
      },
    }).select("_id");

  const eventIds =
    events.map((event) =>
      event._id.toString()
    );

  return Action.find({
    eventId: {
      $in: eventIds,
    },
  })
    .sort({
      createdAt: -1,
    })
    .limit(20)
    .select(
      "actionType status details createdAt"
    );
};



export const getDashboardRepositories =
  async (userId: string) => {
    const repositories =
      await Repository.find({
        user: userId,
      }).select(
        "name fullName defaultBranch isActive webhookId"
      );

    const result = [];

    for (const repo of repositories) {
      const events =
        await Event.countDocuments({
          repository: repo.fullName,
        });

      const eventIds = (
        await Event.find({
          repository: repo.fullName,
        }).distinct("_id")
      ).map((id) => id.toString());

      const actions =
        await Action.countDocuments({
          eventId: {
            $in: eventIds,
          },
        });

      result.push({
        ...repo.toObject(),
        events,
        actions,
      });
    }

    return result;
  };