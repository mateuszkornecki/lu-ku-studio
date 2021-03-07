export default function getProjectSlug(projectName: string): string {
  return projectName.toLowerCase().split(" ").join("_")
}
