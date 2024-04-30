// eslint-disable-next-line
export default function getStudentIdsSum (student) {
  return student.reduce((total, student) => total + student.id, 0);
}
