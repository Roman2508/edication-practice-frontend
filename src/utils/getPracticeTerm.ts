export const getPracticeTerm = (
  canStudentSelectPracticeBase: boolean,
  startStudentTerm: string,
  endStudentTerm: string,
  startTerm: string,
  endTerm: string
) => {
  //
  // if student can selected practice term ? show student term : show admin term
  const practiceTerm = canStudentSelectPracticeBase
    ? {
        start: startStudentTerm || ' - - ',
        end: endStudentTerm || ' - - ',
      }
    : { start: startTerm, end: endTerm }

  // 0 elem - year, 1 elem - month, 2 elem - day
  const start = practiceTerm.start.split('-')
  const end = practiceTerm.end.split('-')

  return { start, end }
}
