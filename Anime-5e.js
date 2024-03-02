import { ANIME5E } from "./module/config.js";

class Anime5eSkills {
    static MODULE_NAME = "Anime-5e";
    static MODULE_TITLE = "Anime 5e";

	static init = async () => {
            CONFIG.DND5E.skills.aca = { label: "ANIME5E.SkillAca", ability: "int", /*toString: () => { return "Academia"; }*/ fullKey: "academia", reference: "", icon: "" };
            CONFIG.DND5E.skills.agr = { label: "ANIME5E.SkillAgr", ability: "wis", /*toString: () => { return "Agriculture"; }*/ fullKey: "agriculture", reference: "", icon: "" };
            CONFIG.DND5E.skills.alc = { label: "ANIME5E.SkillAlc", ability: "int", /*toString: () => { return "Alchemy"; }*/ fullKey: "alchemy", reference: "", icon: "" };
            CONFIG.DND5E.skills.arch = { label: "ANIME5E.SkillArch", ability: "int", /*toString: () => { return "Architecture"; }*/ fullKey: "architecture", reference: "", icon: "" };
            CONFIG.DND5E.skills.akn = { label: "ANIME5E.SkillAkn", ability: "int", /*toString: () => { return "Area Knowledge"; }*/ fullKey: "areaKnowledge", reference: "", icon: "" };
            CONFIG.DND5E.skills.art = { label: "ANIME5E.SkillArt", ability: "dex", /*toString: () => { return "Artisan"; }*/ fullKey: "artisan", reference: "", icon: "" };
            CONFIG.DND5E.skills.bus = { label: "ANIME5E.SkillBus", ability: "int", /*toString: () => { return "Business"; }*/ fullKey: "business", reference: "", icon: "" };
            CONFIG.DND5E.skills.clm = { label: "ANIME5E.SkillClm", ability: "dex", /*toString: () => { return "Climbing"; }*/ fullKey: "climbing", reference: "", icon: "" };
            CONFIG.DND5E.skills.ctb = { label: "ANIME5E.SkillCtb", ability: "con", /*toString: () => { return "Controlled Breathing"; }*/ fullKey: "controlledBreathing", reference: "", icon: "" };
            CONFIG.DND5E.skills.cul = { label: "ANIME5E.SkillCul", ability: "int", /*toString: () => { return "Culture"; }*/ fullKey: "culture", reference: "", icon: "" };
            CONFIG.DND5E.skills.dis = { label: "ANIME5E.SkillDis", ability: "cha", /*toString: () => { return "Disguise"; }*/ fullKey: "disguise", reference: "", icon: "" };
            CONFIG.DND5E.skills.dma = { label: "ANIME5E.SkillDma", ability: "wis", /*toString: () => { return "Domestic Arts"; }*/ fullKey: "domesticArts", reference: "", icon: "" };
            CONFIG.DND5E.skills.emp = { label: "ANIME5E.SkillEmp", ability: "cha", /*toString: () => { return "Empathy"; }*/ fullKey: "empathy", reference: "", icon: "" };
            CONFIG.DND5E.skills.eng = { label: "ANIME5E.SkillEng", ability: "int", /*toString: () => { return "Engineering"; }*/ fullKey: "emgineering", reference: "", icon: "" };
            CONFIG.DND5E.skills.eti = { label: "ANIME5E.SkillEti", ability: "cha", /*toString: () => { return "Etiquette"; }*/ fullKey: "etiquette", reference: "", icon: "" };
            CONFIG.DND5E.skills.foc = { label: "ANIME5E.SkillFoc", ability: "wis", /*toString: () => { return "Focus"; }*/ fullKey: "focus", reference: "", icon: "" };
            CONFIG.DND5E.skills.frg = { label: "ANIME5E.SkillFrg", ability: "dex", /*toString: () => { return "Forgery"; }*/ fullKey: "forgery", reference: "", icon: "" };
            CONFIG.DND5E.skills.gam = { label: "ANIME5E.SkillGam", ability: "wis", /*toString: () => { return "Gaming"; }*/ fullKey: "gaming", reference: "", icon: "" };
            CONFIG.DND5E.skills.hlm = { label: "ANIME5E.SkillHlm", ability: "dex", /*toString: () => { return "Helming"; }*/ fullKey: "helming", reference: "", icon: "" };
            CONFIG.DND5E.skills.intg = { label: "ANIME5E.SkillIntg", ability: "wis", /*toString: () => { return "Interrogation"; }*/ fullKey: "interrogation", reference: "", icon: "" };
            CONFIG.DND5E.skills.law = { label: "ANIME5E.SkillLaw", ability: "int", /*toString: () => { return "Law"; }*/ fullKey: "law", reference: "", icon: "" };
            CONFIG.DND5E.skills.ldr = { label: "ANIME5E.SkillLdr", ability: "cha", /*toString: () => { return "Leadership"; }*/ fullKey: "leadership", reference: "", icon: "" };
            CONFIG.DND5E.skills.mng = { label: "ANIME5E.SkillMin", ability: "int", /*toString: () => { return "Mining"; }*/ fullKey: "mining", reference: "", icon: "" };
            CONFIG.DND5E.skills.nav = { label: "ANIME5E.SkillNav", ability: "int", /*toString: () => { return "Navigation"; }*/ fullKey: "navigation", reference: "", icon: "" };
            CONFIG.DND5E.skills.phy = { label: "ANIME5E.SkillPhy", ability: "int", /*toString: () => { return "Physics"; }*/ fullKey: "physics", reference: "", icon: "" };
            CONFIG.DND5E.skills.rid = { label: "ANIME5E.SkillRid", ability: "dex", /*toString: () => { return "Riding"; }*/ fullKey: "riding", reference: "", icon: "" };
            CONFIG.DND5E.skills.sed = { label: "ANIME5E.SkillSed", ability: "cha", /*toString: () => { return "Seduction"; }*/ fullKey: "seduction", reference: "", icon: "" };
            CONFIG.DND5E.skills.str = { label: "ANIME5E.SkillStr", ability: "cha", /*toString: () => { return "Street Sense"; }*/ fullKey: "streetSense", reference: "", icon: "" };
            CONFIG.DND5E.skills.swm = { label: "ANIME5E.SkillSwm", ability: "con", /*toString: () => { return "Swimming"; }*/ fullKey: "swimming", reference: "", icon: "" };
            CONFIG.DND5E.skills.trp = { label: "ANIME5E.SkillTrp", ability: "dex", /*toString: () => { return "Traps"; }*/ fullKey: "traps", reference: "", icon: "" };
            CONFIG.DND5E.skills.vis = { label: "ANIME5E.SkillVis", ability: "wis", /*toString: () => { return "Visual Arts"; }*/ fullKey: "visualArts", reference: "", icon: "" };
            CONFIG.DND5E.skills.war = { label: "ANIME5E.SkillWar", ability: "wis", /*toString: () => { return "Warfare"; }*/ fullKey: "warfare", reference: "", icon: "" };

		CONFIG.DND5E.sourceBooks.A5E = "Anime 5E";
    }
}

Hooks.once("init", Anime5eSkills.init);
