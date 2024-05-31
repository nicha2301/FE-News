import { Topic } from "~/services/const/enum";
import { RSSApi } from "~/utils/rssUtilsl";
import { rssFeed } from "~/services/const/map";
import MainPage3 from "../MainPage/components/MainPage3";

export default function NationalDefenseEducation() {
    const topic = RSSApi(rssFeed[Topic.NATIONAL_DEFENSE_EDUCATION], 0)
  return (
    <MainPage3 data={topic} />
  )
}