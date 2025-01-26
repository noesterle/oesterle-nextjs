import Resume from "@/oesterle-resume/app/ui/Resume";
import {readFileSync} from 'fs';
import {load} from 'js-yaml';
import { Resume as ResumeType } from "@/oesterle-resume/data/types";


export default function Home() {
  let doc: ResumeType = {
                          resume: {
                            name:'Nathan Oesterle', jobTitle:'Software Engineer', 
                            summary:'Please contact Nathan Oesterle about this error.', 
                            contact:[
                              {title:'contact@oesterle.io', icon:'', link:'mailto:contact@oesterle.io'},
                              {title: 'Github://noesterle/resume', icon:'', link:'https://github.com/noesterle/oesterle-resume'}
                            ], 
                            skills:[], education: [], employment:[], projects:[]}}
  try {
    doc = load(readFileSync('../oesterle-resume/data/resume.yml', 'utf8')) as ResumeType;
    // console.log(doc);
  } catch (e) { // eslint-disable-line @typescript-eslint/no-unused-vars
    // console.log(e);
  }
  // console.log(doc)
  return (
    <Resume resume={doc}></Resume>
  );
}
