// Speedrun.com API IDs
const k1        = "9dokkk1p";
const k1Any     = "xd1194d8";
const k1AnyRS   = "ylp7errl";
const k1ASM     = "zd3qlyvk";
const k1AQ      = "wdmgoedq";
const k1AQRS    = "wl39djvl";
const k2        = "kdkv8x1m";
const k2Any     = "ndx34jdq";
const k2AnyRS   = "p85r4v3n";
const k2AP      = "w20q3zdn";
const k2APRS    = "68ko4vkn";
const k2MQ      = "02qgmy9d";
const k2MQRS    = "rn1z0m1l";

const catIds = {
    "k1AnyU"    : `${k1}/category/${k1Any}?var-${k1AnyRS}=z196g781&top=1`,
    "k1AnyNMG"  : `${k1}/category/${k1Any}?var-${k1AnyRS}=p12re34l&top=1`,
    "k1AnyG"    : `${k1}/category/${k1Any}?var-${k1AnyRS}=81pvw881&top=1`,
    "k1ASM"     : `${k1}/category/${k1ASM}?top=1`,
    "k1AQU"     : `${k1}/category/${k1AQ}?var-${k1AQRS}=814mgge1&top=1`,
    "k1AQNMG"   : `${k1}/category/${k1AQ}?var-${k1AQRS}=z19eyyyq&top=1`,
    "k1AQG"     : `${k1}/category/${k1AQ}?var-${k1AQRS}=p12jmmdq&top=1`,
    "k2AnyU"    : `${k2}/category/${k2Any}?var-${k2AnyRS}=21gvrr81`,
    "k2AnyNDT"  : `${k2}/category/${k2Any}?var-${k2AnyRS}=jqz8778q`,
    "k2AnyG"    : `${k2}/category/${k2Any}?var-${k2AnyRS}=21d9775q`,
    "k2AP"      : `${k2}/category/${k2AP}?top=1`,
    "k2MQU"     : `${k2}/category/${k2MQ}?var-${k2MQRS}=810gegol`,
    "k2MQNDT"   : `${k2}/category/${k2MQ}?var-${k2MQRS}=9qjvyv7q`,
    "k2MQG"     : `${k2}/category/${k2MQ}?var-${k2MQRS}=jq6nknvl`
};

async function get_record(uri, tr) {
    res = await fetch(uri);
    response = await res.json();
    
    run = response['data']['runs'][0]['run'];

    player_uri = run['players'][0]['uri'];
    LRT = run['times']['realtime_noloads_t'];
    RTA = run['times']['realtime_t'];
    link = run['weblink'];
    
    player_res = await fetch(player_uri);
    p_response = await player_res.json();
    player = p_response['data']['names']['international'];

    tdPlayer = document.createElement("td");
    aPlayerlink = document.createElement("a");
    aPlayerlink.setAttribute("href", `https://www.speedrun.com/users/${player}`);
    aPlayerlink.append(player);
    tdPlayer.append(aPlayerlink);

    tdLRT = document.createElement("td");
    aLRTlink = document.createElement("a");
    aLRTlink.setAttribute("href", link);
    aLRTlink.append(new Date(LRT * 1000).toISOString().slice(11, 19));
    tdLRT.append(aLRTlink);

    tdRTA = document.createElement("td");
    aRTAlink = document.createElement("a");
    aRTAlink.setAttribute("href", link);
    aRTAlink.append(new Date(RTA * 1000).toISOString().slice(11, 19));
    tdRTA.append(aRTAlink);

    tr.append(tdPlayer);
    tr.append(tdLRT);
    tr.append(tdRTA);
}

async function leaderboards() {
    for (id in catIds) {
        tr = document.getElementById(id);
        if (tr){
            await get_record(`https://www.speedrun.com/api/v1/leaderboards/${catIds[id]}`, tr);
        }
    }
}
leaderboards();
