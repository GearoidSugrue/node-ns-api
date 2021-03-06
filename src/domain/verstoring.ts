import { Reisadviezen } from './reisadviezen';
import { Traject } from './traject';
import { VerstoringsType } from './enums';
import { BaanvakBeperking } from './baanvak-beperking';
import { Baanvak } from './baanvak';
import { Geldigheid } from './geldigheid';

export interface Verstoring {
	alternatiefVervoer?: string;
	baanvakBeperking?: BaanvakBeperking[];
	baanvakken?: Baanvak[];
	extraReistijd?: string;
	fase?: string;
	geldigheidsLijst?: Geldigheid[];
	gevolg?: string;
	gevolgType?: string;
	header?: string;
	id?: string;
	impact?: number;
	landelijk?: boolean;
	leafletUrl?: string;
	maatschappij?: number;
	meldtijd?: string;
	oorzaak?: string;
	periode?: string;
	prioriteit?: number;
	reden?: string;
	reisadviezen?: Reisadviezen;
	trajecten?: Traject[];
	type?: VerstoringsType;
	versie?: string;
	verwachting?: string;
	volgnummer?: string;
}
