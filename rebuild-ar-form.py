import subprocess, json

BASE = "http://145.79.58.13"
HOST = "iconicinvestors.com.au"
AUTH = "tonyalbuquerque@yahoo.com:g0fm 1z1x kpQh kmdC iOE2 SaOv"
FORM_ID = 3

def txt(name, label, req=False, ph=""):
    return {"element":"input_text","attributes":{"type":"text","name":name,"value":"","id":"","class":"","placeholder":ph},"settings":{"label":label,"required":req,"conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def eml(name, label, req=True):
    return {"element":"input_email","attributes":{"type":"email","name":name,"value":"","id":"","class":"","placeholder":"email@example.com"},"settings":{"label":label,"required":req,"conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def phone(name, label, req=False):
    return {"element":"input_text","attributes":{"type":"tel","name":name,"value":"","id":"","class":"","placeholder":"04xx xxx xxx"},"settings":{"label":label,"required":req,"conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def date(name, label, req=False):
    return {"element":"input_date","attributes":{"name":name,"value":"","id":"","class":"","data-date_format":"d/m/Y","placeholder":"DD/MM/YYYY"},"settings":{"label":label,"required":req,"date_format":"d/m/Y","conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def txta(name, label, req=False, rows=3):
    return {"element":"textarea","attributes":{"name":name,"value":"","id":"","class":"","placeholder":"","rows":rows},"settings":{"label":label,"required":req,"conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def radio(name, label, opts, req=False):
    return {"element":"input_radio","attributes":{"name":name,"value":"","id":"","class":""},"settings":{"label":label,"options":[{"label":o,"value":o} for o in opts],"required":req,"conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def chk(name, label, opts):
    return {"element":"input_checkbox","attributes":{"name":name,"value":"","id":"","class":""},"settings":{"label":label,"options":[{"label":o,"value":o[:40].replace(" ","_").lower()} for o in opts],"conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def sel(name, label, opts, req=False):
    options = [{"label":"-- Please select --","value":""}] + [{"label":o,"value":o} for o in opts]
    return {"element":"select","attributes":{"name":name,"value":"","id":"","class":""},"settings":{"label":label,"options":options,"required":req,"conditional_logics":[],"validation_rules":{}},"editor_options":{"title":label}}

def sec(title):
    return {"element":"custom_html","attributes":{"name":"custom_html_"+title[:10].replace(" ",""),"value":f"<h3 style='color:#1a3c2e;border-bottom:2px solid #c9a84c;padding-bottom:8px;margin-top:32px;font-size:15px'>{title}</h3>","id":"","class":""},"settings":{"label":"HTML","conditional_logics":[]},"editor_options":{"title":"Section"}}

def html(content):
    return {"element":"custom_html","attributes":{"name":"custom_html","value":content,"id":"","class":""},"settings":{"label":"HTML","conditional_logics":[]},"editor_options":{"title":"HTML"}}

fields = [
    # Header note
    html("<p style='background:#f8f5f0;border-left:4px solid #1a3c2e;padding:12px 16px;border-radius:4px;font-size:14px'>Please complete all sections carefully. You must not represent yourself as an Authorised Representative until notified in writing of your appointment.</p>"),

    # ── Licensing Options ──
    sec("1. Licensing Options"),
    html("<p style='font-size:13px;color:#666'>Please tick the licensing option(s) you would like to use:</p>"),
    chk("personal_advice","Personal Financial Product Advice",["Comprehensive (all financial products covered by the licence)","Managed investments","Life risk insurance","Superannuation (including SMSFs)","Securities"]),
    chk("limited_advice","Limited Financial Product Advice",["Managed investments","Life risk insurance","Superannuation (including SMSFs)","Securities"]),
    chk("general_advice","General Financial Product Advice",["Managed investments","Life risk insurance","Superannuation (including SMSFs)","Securities"]),
    chk("other_interests","Other Areas of Interest",["Debentures","Estate Planning","Aged Care","Tax (Financial) Advice – if not currently a Registered Tax Agent"]),

    # ── Personal Details ──
    sec("2. Personal Details"),
    sel("title","Title",["Mr","Ms","Mrs","Miss","Dr","Other"],req=True),
    txt("first_name","First Name(s)",req=True),
    txt("surname","Surname",req=True),
    date("date_of_birth","Date of Birth"),
    txt("place_of_birth","Place of Birth",ph="City, Country"),
    txta("home_address","Home Address",req=True,rows=2),
    txta("postal_address","Postal Address (if different from above)",rows=2),
    phone("phone","Phone Number",req=True),
    eml("email","Email Address",req=True),

    # ── Business Details ──
    sec("3. Employer / Business Details"),
    txt("business_name","Business Name"),
    txt("abn_acn","ABN / ACN"),
    radio("gst_registered","GST Registered?",["Yes","No"]),
    txta("business_address","Business Address",rows=2),
    txta("business_postal","Business Postal Address (if different)",rows=2),
    phone("business_phone","Business Phone"),
    eml("business_email","Business Email"),
    txt("position_role","Your Position / Role"),

    # ── AR Details ──
    sec("4. Authorised Representative Details"),
    radio("ar_type","Do you wish to be authorised as:",["Individual","Corporate entity","Both"],req=True),
    txt("corporate_name","Registered Business Name (if corporate)"),
    txt("corporate_abn","Corporate ABN / ACN"),
    txta("corporate_address","Principal Business Address (if corporate)",rows=2),
    radio("has_ar_number","Has ASIC previously issued you with an Authorised Representative Number?",["Yes","No"]),
    txt("ar_number","If YES, please provide the Representative Number"),
    radio("other_licensee","Are you currently an Authorised Representative of another AFS Licensee?",["Yes","No"]),
    txt("other_licensee_name","If YES, please provide the Licensee name"),

    # ── Background Checks ──
    sec("5. Background Checks & Documents"),
    html("<p style='font-size:13px;color:#666'>Please confirm the following documents you will be providing:</p>"),
    chk("documents","Documents to be provided",[
        "100 Points Identity Check – certified Drivers Licence AND Birth Certificate or Passport",
        "National Criminal Record Check",
        "Bankruptcy Check",
        "Academic Records – Undergraduate degree",
        "Academic Records – Post-graduate degree",
        "Academic Records – Diploma",
        "Academic Records – Certificate",
        "Academic Records – Specialist subject matter",
        "Academic Records – Bridging units (ethics, regulatory)",
        "CPD Register for the last three years",
        "Professional memberships",
        "Professional Indemnity Insurance (full copy of current policy)",
        "Resume / CV"
    ]),

    # ── Bank Details — Fee ──
    sec("6. Bank Account Details — Monthly Fee Deduction"),
    txt("fee_account_name","Account Name",req=True),
    txt("fee_bank","Bank & Branch"),
    txt("fee_bsb","BSB",ph="XXX-XXX"),
    txt("fee_account_number","Account Number"),

    # ── Bank Details — Payments ──
    sec("Bank Account Details — Payments to You"),
    html("<p style='font-size:13px;color:#666'>Please provide details or type <em>as above</em>:</p>"),
    txt("pay_account_name","Account Name"),
    txt("pay_bsb","BSB",ph="XXX-XXX"),
    txt("pay_account_number","Account Number"),

    # ── Statement ──
    sec("7. Statement of Personal Information"),
    html("<p style='font-size:13px;color:#666'>Within the last 10 years, within Australia and/or overseas, answer YES or NO to each question:</p>"),
    radio("q1","Have you been the subject of any findings or proceedings relating to fraud, misrepresentation or dishonesty?",["Yes","No"],req=True),
    radio("q2","Have you been refused, restricted, banned or disqualified from any licensed trade, business or profession?",["Yes","No"],req=True),
    radio("q3","Have you been refused, suspended or disciplined by any professional body or industry association?",["Yes","No"],req=True),
    radio("q4","Are there any outstanding debts with any insurance company, fund manager or AFS Licensee?",["Yes","No"],req=True),
    radio("q5","Have you ever been subject to adverse findings or investigation by ASIC, ATO or APRA?",["Yes","No"],req=True),
    radio("q6","Have you ever been declared bankrupt or entered into a Debt Agreement under the Bankruptcy Act 1966?",["Yes","No"],req=True),
    radio("q7","Have you been engaged in management of any entity that was declared insolvent?",["Yes","No"],req=True),
    radio("q8","Have you ever been subject to a Professional Indemnity Claim?",["Yes","No"],req=True),
    radio("q9","Have you been subject to any complaint made to an external Complaints Resolution body?",["Yes","No"],req=True),
    radio("q10","Have you been engaged in management of any entity that had its licence or registration revoked?",["Yes","No"],req=True),
    txta("yes_details","If YES to any of the above, please provide full details",rows=4),

    # ── Declaration ──
    sec("8. Declaration"),
    html("<p style='font-size:13px;background:#f8f5f0;padding:12px;border-radius:4px'>By submitting this form I declare that I agree to abide by all conditions placed upon Authorised Representatives by Iconic Partners, comply with Corporations Law, maintain CPD requirements, and that all statements in this application are true and correct. I acknowledge that false or incorrect information may result in termination of my Authorised Representative status.</p>"),
    txt("applicant_name","Full Name",req=True),
    date("declaration_date","Date",req=True),
    chk("declaration_confirm","Declaration",["I confirm all information provided is true and correct and I agree to the terms above."]),
]

payload = {
    "title": "Authorised Representative Application — Iconic Partners AFSL 450822",
    "form_fields": json.dumps({
        "fields": fields,
        "submitButton": {
            "uniqElKey": "el_submit",
            "element": "button",
            "attributes": {"type": "submit"},
            "settings": {"align": "left", "button_style": "default", "container_class": "", "help_message": ""},
            "editor_options": {"template": "buttonElement"}
        }
    })
}

r = subprocess.run([
    "curl", "-s", "-X", "POST",
    f"{BASE}/wp-json/fluentform/v1/forms/{FORM_ID}",
    "-H", f"Host: {HOST}",
    "-u", AUTH,
    "-H", "Content-Type: application/json",
    "-d", json.dumps(payload)
], capture_output=True, text=True)

try:
    d = json.loads(r.stdout)
    print("Response:", d.get("message", str(d)[:200]))
except:
    print("Raw:", r.stdout[:200])
