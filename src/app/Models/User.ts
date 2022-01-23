export class User {
    private title: string;
    private firstName: string;
    private lastName: string;
    private expertise: string[];
    private keywords: string[];
    private profilePhotoUrl: string;
    private id: string;
    private university: string;

	constructor($title: string, $firstName: string, $lastName: string, $expertise: string[] = [], $keywords: string[] = [], id: string = "test_id", university: string = '', profilePhotoUrl: string = '') {
		this.title = $title;
		this.firstName = $firstName;
		this.lastName = $lastName;
		this.expertise = $expertise;
        this.keywords = $keywords;
        this.id = id;
        this.university = university;
        this.profilePhotoUrl = profilePhotoUrl;
    }
    
    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Getter $expertise
     * @return {string[]}
     */
	public get $expertise(): string[] {
		return this.expertise;
	}

    /**
     * Getter $keywords
     * @return {string[]}
     */
	public get $keywords(): string[] {
		return this.keywords;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Setter $expertise
     * @param {string[]} value
     */
	public set $expertise(value: string[]) {
		this.expertise = value;
	}

    /**
     * Setter $keywords
     * @param {string[]} value
     */
	public set $keywords(value: string[]) {
		this.keywords = value;
	}

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}


    /**
     * Getter $university
     * @return {string}
     */
	public get $university(): string {
		return this.university;
	}

    /**
     * Setter $university
     * @param {string} value
     */
	public set $university(value: string) {
		this.university = value;
    }
    
    /**
     * Getter $profilePhotoUrl
     * @return {string}
     */
	public get $profilePhotoUrl(): string {
		return this.profilePhotoUrl;
	}

    /**
     * Setter $profilePhotoUrl
     * @param {string} value
     */
	public set $profilePhotoUrl(value: string) {
		this.profilePhotoUrl = value;
	}
}