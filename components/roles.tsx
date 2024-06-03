import SkillList from "./skill-list";
import type { Institution } from "@/data/content";

const Roles: React.FC<Institution> = ({ roles }) => {
    return (
      <section className="text-sm">
        <ul className="timeline timeline-snap-icon timeline-vertical timeline-compact">
          {roles.map((role, index) => {
            return (
            <li key={index}>
              { index !== 0 ? (<hr/>) : null}
              <div className="timeline-middle mx-4">
                <div className="w-3 h-3 bg-zinc-400 rounded-full"></div>
              </div>
              <div className="timeline-end">
                <div className="flex flex-col mb-4">
                  <h4 className="font-semibold text-slate-600">{role.title}</h4>
                  <div className="text-slate-600">
                    {new Date(role.startDate).toLocaleString('en-nz',{month:'short', year:'numeric'})} - { role.endDate ? new Date(role.endDate).toLocaleString('en-nz',{month:'short', year:'numeric'}) : 'Present'}
                  </div>
                  <p className="text-slate-600">
                    {role.subTitle}
                  </p>
                  {role.description ? (
                    <p className="text-slate-800 mt-2">
                      {role.description}
                    </p>
                  ) : null}
                  {role.skills ? (
                    <SkillList {...role} />
                  ) : null}
                </div>
              </div>
              { index !== roles.length -1 ? (<hr/>) : null}
            </li>
            );
          })}
        </ul>
      </section>
    );
  };

export default Roles;