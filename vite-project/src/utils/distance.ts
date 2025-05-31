import {Candidate, Job} from "../types";

export function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371; // Raio da Terra em km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function getJobDistance(candidate: Candidate, job: Job): string {
  if (
    candidate?.address?.lat &&
    candidate?.address?.lng &&
    job?.address?.lat &&
    job?.address?.lng
  ) {
    const distance = getDistanceFromLatLonInKm(
      parseFloat(candidate.address.lat),
      parseFloat(candidate.address.lng),
      parseFloat(job.address.lat),
      parseFloat(job.address.lng)
    );
    return distance.toFixed(1).replace('.', ',') + " km";
  }
  return "";
}