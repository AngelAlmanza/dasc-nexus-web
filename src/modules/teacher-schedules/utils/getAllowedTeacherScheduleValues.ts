import {
  IScheduleBlock,
  ITeacher,
  ITeacherSchedule,
  ITerm,
} from "@/data/models";

// The following constraints are defined in the database schema:
// $table->unique(['teacher_id', 'schedule_block_id', 'term_id']);

// This function is used to filter the values that can be selected in the teacher schedule form
export const getAllowedTeacherScheduleValues = (
  teacherSchedules: ITeacherSchedule[],
  teachers: ITeacher[],
  scheduleBlocks: IScheduleBlock[],
  terms: ITerm[],
  selectedTeacher: number,
  selectedScheduleBlock: number,
  selectedTerm: number,
  currentSelectedTeacherSchedule?: ITeacherSchedule,
): {
  teachers: ITeacher[];
  scheduleBlocks: IScheduleBlock[];
  terms: ITerm[];
} => {
  if (
    currentSelectedTeacherSchedule &&
    currentSelectedTeacherSchedule.teacher.id === selectedTeacher &&
    currentSelectedTeacherSchedule.schedule_block.id ===
      selectedScheduleBlock &&
    currentSelectedTeacherSchedule.term.id === selectedTerm
  ) {
    return {
      teachers,
      scheduleBlocks,
      terms,
    };
  }

  const allowedTeachers = teachers.filter((teacher) => {
    if (!selectedScheduleBlock && !selectedTerm) return true;
    return !teacherSchedules.some(
      (ts) =>
        ts.teacher.id === teacher.id &&
        ts.schedule_block.id === selectedScheduleBlock &&
        ts.term.id === selectedTerm,
    );
  });

  const allowedScheduleBlocks = scheduleBlocks.filter((scheduleBlock) => {
    if (!selectedTeacher || !selectedTerm) return true;
    return !teacherSchedules.some(
      (ts) =>
        ts.teacher.id === selectedTeacher &&
        ts.schedule_block.id === scheduleBlock.id &&
        ts.term.id === selectedTerm,
    );
  });

  const allowedTerms = terms.filter((term) => {
    if (!selectedTeacher || !selectedScheduleBlock) return true;
    return !teacherSchedules.some(
      (ts) =>
        ts.teacher.id === selectedTeacher &&
        ts.schedule_block.id === selectedScheduleBlock &&
        ts.term.id === term.id,
    );
  });

  return {
    teachers: allowedTeachers,
    scheduleBlocks: allowedScheduleBlocks,
    terms: allowedTerms,
  };
};
