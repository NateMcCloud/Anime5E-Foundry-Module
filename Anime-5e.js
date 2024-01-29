import { ANIME5E } from "./module/config.js";

class Anime5eSkills {
    static MODULE_NAME = "Anime-5e";
    static MODULE_TITLE = "Anime 5e";

		static init = async () => {
        const skills = {
            aca: { label: "ANIME5E.SkillAca", ability: "int", toString: () => { return "Academia"; } },
            agr: { label: "ANIME5E.SkillAgr", ability: "wis", toString: () => { return "Agriculture"; } },
            alc: { label: "ANIME5E.SkillAlc", ability: "int", toString: () => { return "Alchemy"; } },
            arch: { label: "ANIME5E.SkillArch", ability: "int", toString: () => { return "Architecture"; } },
            akn: { label: "ANIME5E.SkillAkn", ability: "int", toString: () => { return "Area Knowledge"; } },
            art: { label: "ANIME5E.SkillArt", ability: "dex", toString: () => { return "Artisan"; } },
            bus: { label: "ANIME5E.SkillBus", ability: "int", toString: () => { return "Business"; } },
            clm: { label: "ANIME5E.SkillClm", ability: "dex", toString: () => { return "Climbing"; } },
            ctb: { label: "ANIME5E.SkillCtb", ability: "con", toString: () => { return "Controlled Breathing"; } },
            cul: { label: "ANIME5E.SkillCul", ability: "int", toString: () => { return "Culture"; } },
            dis: { label: "ANIME5E.SkillDis", ability: "cha", toString: () => { return "Disguise"; } },
            dma: { label: "ANIME5E.SkillDma", ability: "wis", toString: () => { return "Domestic Arts"; } },
            emp: { label: "ANIME5E.SkillEmp", ability: "cha", toString: () => { return "Empathy"; } },
            eng: { label: "ANIME5E.SkillEng", ability: "int", toString: () => { return "Engineering"; } },
            eti: { label: "ANIME5E.SkillEti", ability: "cha", toString: () => { return "Etiquette"; } },
            foc: { label: "ANIME5E.SkillFoc", ability: "wis", toString: () => { return "Focus"; } },
            frg: { label: "ANIME5E.SkillFrg", ability: "dex", toString: () => { return "Forgery"; } },
            gam: { label: "ANIME5E.SkillGam", ability: "wis", toString: () => { return "Gaming"; } },
            hlm: { label: "ANIME5E.SkillHlm", ability: "dex", toString: () => { return "Helming"; } },
            intg: { label: "ANIME5E.SkillIntg", ability: "wis", toString: () => { return "Interrogation"; } },
            law: { label: "ANIME5E.SkillLaw", ability: "int", toString: () => { return "Law"; } },
            ldr: { label: "ANIME5E.SkillLdr", ability: "cha", toString: () => { return "Leadership"; } },
            mng: { label: "ANIME5E.SkillMin", ability: "int", toString: () => { return "Mining"; } },
            nav: { label: "ANIME5E.SkillNav", ability: "int", toString: () => { return "Navigation"; } },
            phy: { label: "ANIME5E.SkillPhy", ability: "int", toString: () => { return "Physics"; } },
            rid: { label: "ANIME5E.SkillRid", ability: "dex", toString: () => { return "Riding"; } },
            sed: { label: "ANIME5E.SkillSed", ability: "cha", toString: () => { return "Seduction"; } },
            str: { label: "ANIME5E.SkillStr", ability: "cha", toString: () => { return "Street Sense"; } },
            swm: { label: "ANIME5E.SkillSwm", ability: "con", toString: () => { return "Swimming"; } },
            trp: { label: "ANIME5E.SkillTrp", ability: "dex", toString: () => { return "Traps"; } },
            vis: { label: "ANIME5E.SkillVis", ability: "wis", toString: () => { return "Visual Arts"; } },
            war: { label: "ANIME5E.SkillWar", ability: "wis", toString: () => { return "Warfare"; } }
        }
        mergeObject(CONFIG.DND5E.skills, skills, { insertKeys: true, insertValues: true, overwrite: true});

        for (const [key, value] of Object.entries(skills)) {
            game.system.model.Actor.character.skills[key] = { value: 0, ability: value.ability, bonuses: { check: "", passive: "" } };
            game.system.model.Actor.npc.skills[key] = { value: 0, ability: value.ability, bonuses: { check: "", passive: "" } };
        }

    }
}

Hooks.on("init", Anime5eSkills.init);