import { Timeline } from "antd";
function ExperiencesTimeline(porps) {
  return (
    <Timeline mode="left" className="workExperiences">
      {porps.workExperiences.map((workExperience) => {
        return (
          <Timeline.Item label={workExperience.time}>
            {workExperience.work}
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}
export default ExperiencesTimeline;
