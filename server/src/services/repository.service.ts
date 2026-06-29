import Repository from "../models/repository.model";

interface ConnectRepositoryInput {
  githubRepoId: number;
  name: string;
  fullName: string;
  owner: string;
  defaultBranch: string;
  userId: string;
}

export const connectRepository = async (
  data: ConnectRepositoryInput
) => {
  const existingRepository = await Repository.findOne({
    githubRepoId: data.githubRepoId,
    user: data.userId,
  });

  if (existingRepository) {
    return existingRepository;
  }

  return Repository.create({
    githubRepoId: data.githubRepoId,
    name: data.name,
    fullName: data.fullName,
    owner: data.owner,
    defaultBranch: data.defaultBranch,
    user: data.userId,
  });
};